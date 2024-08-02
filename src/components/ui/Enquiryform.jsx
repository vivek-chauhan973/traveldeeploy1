export default function enquiryform() {
    return (
        <div className="flex flex-col items-center p-6 bg-background">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary">July | August</h2>
            <h3 className="text-xl font-semibold text-secondary">Find Gems In Rain</h3>
            <p className="text-lg text-accent">Monsoon Special</p>
            <p className="text-lg font-bold text-accent-foreground">Up To 40% Off</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-primary">Let us Help!</h4>
            <p className="text-muted-foreground mb-4">We make sure you get your desired travel services with minimal efforts.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border border-border rounded-md" required />
          <input type="tel" placeholder="Phone" className="w-full p-2 border border-border rounded-md" required />
          <input type="text" placeholder="Destination (E.g. Manali)" className="w-full p-2 border border-border rounded-md" required />
          <input type="number" placeholder="No. Of Travelers" className="w-full p-2 border border-border rounded-md" required />
          <input type="text" placeholder="Date Of Travel (dd/mm/yyyy)" className="w-full p-2 border border-border rounded-md" required />
          
          <button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/80 w-full p-2 rounded-md">Send Enquiry</button>
        </form>
        
        <p className="text-sm text-muted-foreground mt-4">We Are Safe And Secure</p>
          </div>
        </div>
    )
}