import PremiumUltra from "../../assets/PremiumUltra.png"
export default function PlanDetails(){
return (<div className="flex justify-between pt-10 pb-3">
                <div className="w-2/6">
                    <div className="text-[#737373]">PLAN DETAILS</div>
                </div>
                <div className="flex-1 flex items-center">
                    <div>Premium</div>
                    <img className='h-4'src={PremiumUltra} alt="premiumUltra" />
                </div>
            </div>)
}