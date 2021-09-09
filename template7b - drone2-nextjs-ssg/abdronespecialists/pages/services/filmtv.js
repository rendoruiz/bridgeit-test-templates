import Head from 'next/head'

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServicesNavigation from '../../components/Services/ServicesNavigation';

const FilmTvServicePage = () => {
  return ( 
    <ServicesLayout withNavigation heading="Film & TV">
      <Head>
        <title>Film & TV Service - Alberta Drone Specialists</title>
      </Head>
      
    </ServicesLayout>
  );
}
 
export default FilmTvServicePage;