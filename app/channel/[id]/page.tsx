import React from 'react';

type Props = {
    params: {
        id: string;
    };
};

const Page = (props: Props) => {
 const { params: { id } } = props;
 console.log("id", id)

 return (
  <>
    channel {id}
  </>
 );
}

export default Page;