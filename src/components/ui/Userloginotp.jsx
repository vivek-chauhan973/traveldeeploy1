export default function Userloginotp() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold text-center">Welcome to Veena World</h2>
            <p className="text-center text-muted-foreground">Please enter your mobile number to receive a verification code</p>
            <div className="flex items-center mt-4">
              <select className="border border-border rounded-l-md p-2">
                <option value="IN">🇮🇳 India</option>
                
              </select>
              <input type="tel" placeholder="+91" className="border border-border rounded-r-md p-2 flex-1" />
            </div>
            <button className="bg-primary text-primary-foreground w-full mt-4 p-2 rounded-lg hover:bg-primary/80">Request OTP</button>
            <p className="text-center text-sm text-muted-foreground mt-2">
              By continuing you agree to our <a href="#" className="text-primary">Terms of Use</a> & <a href="#" className="text-primary">Privacy Policy</a>
            </p>
          </div>
        </div>
    )
}