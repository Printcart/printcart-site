import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import InfoServices from "containers/AppModern/InfoServices";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const ServicesCategory = (props) => {
  const { total, listServices, servicesRealted, dataSubCat, current_cat } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>
            {current_cat &&
              `Services for the ${current_cat.name_cat} category on Printcart`}
          </title>
          <meta name="theme-color" content="#2563FF" />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <div className="sticky-active">
            <Navbar />
          </div>
          <InfoServices
            serviceList={listServices}
            total={total}
            dataNew={dataSubCat}
            current_cat={current_cat}
            serviceRealted={servicesRealted}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default ServicesCategory;

export async function getServerSideProps({ query }) {
  const alias = query.category;
  const paramStrapi = `${process.env.STRAPI_API_URL}`;
  const paramString = `${process.env.STRAPI_2_API_URL}`;
  const setUrl = new URL(
    "services?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$containsi]",
    paramString
  );
  const newUrl = setUrl.href;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  const filSort = `&sort=createdAt:DESC`;
  const limit = `&pagination[pageSize]=100`;

  const results = await fetch(
    `${paramStrapi}project-categories?sort=updatedAt:DESC&filters[$and][0][alias][$eq]=${alias}`
  ).then((res) => res.json());
  if (results.data.length > 0) {
    const name_cat = results.data[0].attributes.name;
    const alias_cat = results.data[0].attributes.alias;
    const current_cat = { name_cat, alias_cat };

    const fetchListService = fetch(
      `${newUrl}=${name_cat}` + filAgency + filSort
    );
    const fetchServiceRealted = fetch(
      `${paramString}services?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$notContainsi]=${name_cat}&pagination[limit]=8` +
        filSort
    );
    const fetchSubCat = fetch(
      `${paramStrapi}project-categories?populate=parent.parent&filters[parent][alias][$eq]=${alias}&sort=service_count:DESC` +
        limit
    );

    const [promiseListServices, promiseServicesRealted, promiseSubcat] =
      await Promise.all([fetchListService, fetchServiceRealted, fetchSubCat]);
    const [listServices, servicesRealted, dataSubCat] = await Promise.all([
      promiseListServices.json(),
      promiseServicesRealted.json(),
      promiseSubcat.json(),
    ]);

    return {
      props: {
        listServices: listServices["data"],
        total: listServices["meta"],
        current_cat,
        servicesRealted: servicesRealted["data"],
        dataSubCat: dataSubCat["data"],
      },
    };
  }

  return {
    notFound: true,
  };
}
