import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import { useRouter } from 'next/router';
import '../../app/globals.css';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';
import { useCarPopupContext } from '@/components/admin/context/CarPopupCalculation';
import { useEffect } from 'react';

const SearchPage = (pageprops) => {
     const { setServerSideProps} = useCarPopupContext();       
      useEffect(() => {
        if(pageprops){
          setServerSideProps(pageprops || {});
        }
        
      }, [pageprops]);
    const router = useRouter();
    const country = router.query.country || '';
// console.log("..........router ",router)
    return (
        
        <div className='mt-2'>
            <SearchPageTopSeoContent country={country} />
            <SearchHeaderWpr />
        </div>
        
    );
};

export default SearchPage;
