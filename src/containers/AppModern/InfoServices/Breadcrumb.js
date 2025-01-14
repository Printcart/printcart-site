import React from "react";
import Link from "next/link";
import Box from "common/components/Box";
import Icon from "react-icons-kit";
import { ic_home_outline } from "react-icons-kit/md/ic_home_outline";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
} from "react-share";

const Breadcrumb = (props) => {
  const { currentCat } = props;
  const router = useRouter();
  const url = { asPath: router };

  return (
    <Box className="mainbred">
      <Box className="breadcome">
        <Link href="/">
          <a className="text">
            <Icon icon={ic_home_outline} />
            Printcart
          </a>
        </Link>
        -
        <Link href="/services">
          <a className="text">Services Listing</a>
        </Link>
        {currentCat?.name_cat ? (
          <>
            -
            <Link prefetch={false} href={`/services/${currentCat.alias_cat}`}>
              <a className="text">{currentCat.name_cat}</a>
            </Link>
          </>
        ) : (
          ""
        )}
        {currentCat?.name_subcat ? (
          <>
            -
            <Link
              prefetch={false}
              href={`/services/${currentCat.alias_cat}/${currentCat.alias_subcat}`}
            >
              <a className="text">{currentCat.name_subcat}</a>
            </Link>
          </>
        ) : (
          ""
        )}
        {currentCat?.name_sub ? (
          <>
            -
            <Link
              prefetch={false}
              href={`/services/${currentCat.alias_cat}/${currentCat.alias_subcat}/${currentCat.alias_sub}`}
            >
              <a className="text">{currentCat.name_sub}</a>
            </Link>
          </>
        ) : (
          ""
        )}
      </Box>
      <Box className="boxButton">
        <Box className="shareone">
          <FacebookShareButton
            children={<FacebookIcon />}
            url={`${process.env.PRINTCART_URL}` + url}
          />
          <LinkedinShareButton
            children={<LinkedinIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
          <TwitterShareButton
            children={<TwitterIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
          <VKShareButton
            children={<VKIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
          <TelegramShareButton
            children={<TelegramIcon />}
            url={`${process.env.CLOODO_URL}` + url}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Breadcrumb;
