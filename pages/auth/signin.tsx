import Loading from "@components/common/Loading";
import LoginContainer from "@components/login/LoginContainter";
import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession, signIn, useSession } from "next-auth/react";
import React from "react";

const SignInPage: NextPage = () => {
  const { status } = useSession();

  const handleOAuthSignIn = (provider: string) => {
    signIn(provider);
  };

  if (status === "loading") {
    return <Loading />;
  }

  return <LoginContainer onOAuthSignIn={handleOAuthSignIn} />;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default SignInPage;
