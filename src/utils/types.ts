import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface layoutProps {
  children: ReactNode;
  childrenClass?: string;
}

export type breadcrumbType = {
  url: string;
  title: string;
};
export type MsgProfileProps = {
  image?: string;
  name: string;
  time: string;
  lastMsg: string;
  totalMsg?: number;
};
export type CommonProfileProps = {
  image?: string;
  name: string;
  details?: string;
  groupClass?: string;
  imgClass?: string;
  nameClass?: string;
  detailClass?: string;
};

