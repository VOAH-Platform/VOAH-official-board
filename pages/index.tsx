import { GetServerSideProps } from "next";
import { getProviders } from "next-auth/react";
import { DASHBOARD_URL } from "../constants";
import * as Server from "../lib/server";
import { AuthenticationLayout } from "../layouts/Authentication";

interface Props {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

export default function Index({ providers }: Props) {
  return <AuthenticationLayout providers={providers} />;
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
