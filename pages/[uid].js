const UserIdPage = props => {
  return <h1>{props.id}</h1>;
};

export default UserIdPage;

export const getServerSideProps = async context => {
  const { params } = context;
  console.log(params);

  const userId = params.uid;

  return {
    props: {
      id: `userid-${userId}`,
    },
  };
};
