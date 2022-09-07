import FindProForm from "../FindProForm/FindProForm";

function FindPro() {



    return (
        <div className="h-full flex flex-col lg:flex-row items-center justify-center lg:mt-52 lg:mb-52 bg-stone-100 pt-10 pb-10">

                <div className="lg:mr-20">

                    <h1 className="text-xl lg:text-4xl font-bold py-6 tracking-wide">The Process</h1>
                    <div className="leading-loose list-decimal text-sm lg:text-xl w-64 lg:w-full">
                        <li className="py-2 ">Provide basic information to help us match you with a Professional</li>
                        <li className="py-2">Import your current insurance information through Canopy so our Professional can compare and give best pricing</li>
                        <li className="py-2"><span className="font-semibold">OR</span> submit your basic information and one of our Professional will contact you shortly</li>
                    </div>

                </div>

                <div className="">
                    <FindProForm />
                </div>

        </div>
    )

}

export default FindPro;
