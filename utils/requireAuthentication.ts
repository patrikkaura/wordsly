import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

const requireAuthentication = async (
  context: GetServerSidePropsContext,
  callback: Function
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return callback({ session });
};

export default requireAuthentication;
