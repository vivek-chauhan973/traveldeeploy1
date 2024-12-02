import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import { useRouter } from 'next/router';
import '../../app/globals.css';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';
import { AppProvider } from '@/components/admin/context/Package/AddGuest';

const SearchPage = () => {
    const router = useRouter();
    const country = router.query.country || '';
// console.log("..........router ",router)
    return (
        <AppProvider>
        <div className='mt-2'>
            <SearchPageTopSeoContent country={country} />
            <SearchHeaderWpr />
        </div>
        </AppProvider>
    );
};

export default SearchPage;
