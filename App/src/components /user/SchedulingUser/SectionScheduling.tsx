import SelectInput from "../../UI/inputs/SelectInput";

function SectionSchedulingUser() {
  const getCurrentDay = () => {
    const daysWekend = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const months = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];
    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const dayWekend = daysWekend[today.getDay()];

    return ` ${day} ${month.toUpperCase()}, ${dayWekend.toUpperCase()}`;
  };

  return (
    <>
      <main>
        <section className="fixed bottom-0 left-0 w-full bg-black h-3/6 shadow-lg">
          <section className="flex justify-center -mt-10 h-20">
            <div className="bg-yellow-500 w-auto max-w-[320px] px-4 py-3 rounded-lg shadow-xl">
              <h1 className="text-2xl text-black font-light text-center">
                ESCOLHA A DATA/HORÁRIO
              </h1>
            </div>
          </section>

          <section className="flex justify-center my-10 px-4 sm:px-10 lg:px-20">
            <div className="bg-white w-full max-w-[320px] px-4 py-8 rounded-lg shadow-xl">
              <h1 className="tracking-wider font-medium text-center text-lg sm:text-xl">
                {getCurrentDay()}
              </h1>
              <ul>
                {/* <li>
                   <SelectInput 
                    type="radio"
                    className=""
                    onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                      throw new Error("Function not implemented.");
                    } }                    
                   />
                   <label htmlFor="">
                    teste
                   </label>
                </li> */}
              </ul>
              <p className="w-full px-4 py-4 text-center hover:bg-yellow-500">
                9h - 9h50
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default SectionSchedulingUser;
