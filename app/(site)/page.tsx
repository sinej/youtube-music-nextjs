import { sleep } from '@/lib/utils';
import React from 'react';

type Props = {

};

const Page = async (props: Props) => {
 const {} = props;

 await sleep(2000)

 return (
  <>
    Home Page
  </>
 );
}

export default Page;