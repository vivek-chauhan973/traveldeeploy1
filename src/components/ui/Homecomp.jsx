export default function Homecomp() {
    return (
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 bg-background">
          <div className="relative md:w-2/3 mb-4 md:mb-0">
            <img src="https://placehold.co/600x400" alt="Veena World Europe" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
              <h2 className="text-2xl font-bold">VEENA WORLD EUROPE</h2>
              <p className="mt-2">Over the last four months, from March to June, 11,000 guests have fulfilled their dream of visiting Europe.</p>
              <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">Your turn now... Let's go!</button>
              <div className="flex space-x-2 mt-4">
                <button className="bg-secondary text-secondary-foreground p-2 rounded-full">←</button>
                <button className="bg-secondary text-secondary-foreground p-2 rounded-full">→</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-1/3">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="Rajasthan" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">Rajasthan</h3>
                <p>25 tours | 137 departures</p>
                <p>58,772 guests travelled</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="Jammu and Kashmir" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">Jammu and Kashmir</h3>
                <p>24 tours | 137 departures</p>
                <p>59,804 guests travelled</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="Kerala" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">Kerala</h3>
                <p>21 tours | 46 departures</p>
                <p>42,844 guests travelled</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="Leh Ladakh" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">Leh Ladakh</h3>
                <p>17 tours | 46 departures</p>
                <p>25,823 guests travelled</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="South East Asia" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">South East Asia</h3>
                <p>57 tours | 218 departures</p>
                <p>1,251,419 guests travelled</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="Australia New Zealand" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">Australia New Zealand</h3>
                <p>29 tours | 13 departures</p>
                <p>11,481 guests travelled</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img src="https://placehold.co/300x200" alt="America" className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">America</h3>
                <p>14 tours | 13 departures</p>
                <p>12,150 guests travelled</p>
              </div>
            </div>
          </div>
        </div>
    )
}