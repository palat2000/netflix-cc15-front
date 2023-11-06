
export default function Membership(){
    return <div className="flex justify-between pt-3 ">
    <div className="pr-10 w-2/6">
        <div className="text-[#737373]">MEMBERSHIP & BILLING</div>
        <button className="bg-[#E5E5E5] hover:bg-slate-100 pl-10 pr-10 pt-2 pb-2 rounded-sm drop-shadow-md text-sm">Cancel Membership</button>
    </div>
    <div className="flex-1">
        <div className="flex justify-between">
            <div>kobclimax@gmail.com</div>
            <div>Change email</div>
        </div>
        <div className="flex justify-between">
            <div className="flex">

                <div>password:</div>
                <div>********</div>
            </div>
            <div>Change Password</div>
        </div>
        <div className="flex justify-between">
            <div className="flex">

                <div>Phone:</div>
                <div>0999999</div>
            </div>
            <div>Change Phone number</div>
        </div>
        <hr className="mt-2 mb-2" />
        <div className="pb-3 pt-3">Expired in USERDATA FORM BACKEND</div>
    </div>
</div>
}