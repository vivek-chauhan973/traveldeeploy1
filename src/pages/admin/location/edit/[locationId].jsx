import '../../../../app/globals.css'
import LocationForm from '@/components/admin/LocationForm';

export default function editPackage() {

    const formType = 'Edit'

    return (
        <LocationForm formType={formType} />
    )
}