export default function SkillCard({ data }: any) {
    return (


        <div className="w-56 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-5">
                <img className="w-24 h-24 my-3 rounded-full shadow-lg" src={data.img} alt="skill image" />
                <h5 className=" text-xl font-medium text-gray-900 dark:text-white">{data.title}</h5>
            </div>
        </div>

    )
}