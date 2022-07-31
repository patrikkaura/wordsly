import CreateContainer from "@components/form/create/CreateContainer";
import requireAuthentication from "@utils/requireAuthentication";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";

const CardCreate: NextPage = () => {
  return <CreateContainer />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return requireAuthentication(ctx, ({ session }) => {
    return {
      props: {
        session,
      },
    };
  });
};

export default CardCreate;
