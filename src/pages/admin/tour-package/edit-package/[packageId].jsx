import '../../../../app/globals.css'
import PackageForm from '@/components/admin/PackageForm';

export default function editPackage() {

    const formType = 'Edit'

    return (
        <PackageForm formType={formType} />
    )
}