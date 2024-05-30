const MyJournal = (): JSX.Element => {
    return (<div className="grid grid-cols-3 ">
        {/* Old notes on right */}
        <div className="col-span-1 border-r-2">
            <ul>
                <li>
                    Notes1
                </li>
                <li>
                    Notes2
                </li>
                <li>
                    Notes3
                </li>
            </ul>
        </div>

        {/* note pad and add button*/}
        <div className="flex flex-col items-center col-span-2 justify-center">

            {/* text area note pad with lines */}
            <div>
                <textarea className="border border-gray-300 p-2 rounded">
                    Hello
                </textarea>
            </div>


            {/* add button */}
            <div className="">
                <button className="btn bg-gray-300">
                    +
                </button>
            </div>

        </div>
    </div>
    )
}

export default MyJournal;