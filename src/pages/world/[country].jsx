import SearchPageTopSeoContent from '@/components/SearchPageTopSeoContent';
import { useRouter } from 'next/router';
import '../../app/globals.css';
import SearchHeaderWpr from '@/components/SearchHeaderWpr';

const SearchPage = () => {
    const router = useRouter();
    const country = router.query.country || '';

    return (
        <div className='mt-2'>
            <SearchPageTopSeoContent country={country} />
            <SearchHeaderWpr />
        </div>
    );
};

export default SearchPage;
