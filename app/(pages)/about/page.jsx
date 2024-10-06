import React from 'react'
import TeamCard from "@/components/TeamCard";
import big_red from "@/public/assets/images/big_red.png"
import jack from "@/public/assets/images/jack.jpg"
import lucas from "@/public/assets/images/lucas.jpg"
import duke from "@/public/assets/images/duke.jpg"
const page = () => {
  return (
    <>
      <section className="bg-bg-3">
        <div className="page-margins py-5 flex items-center">
          <h1 className="blue_gradient text-5xl" data-aos="fade-in-right">
            Meet the people behind: Cornell Flights! 
          </h1>
        </div>
        <br></br>
      </section>

      <section className="py-4"> 
        <div className="grid-cols-3 grid max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-6">
            <TeamCard
                  name="Lucas"
                  image={lucas}
                  role="front end dev"
                  description="CS @ Cornell"
            >
            </TeamCard>
            <TeamCard
                  name="Duke"
                  image={duke}
                  role="back end dev"
                  description="EnvE + Info Sci @ Cornell"
            >
            </TeamCard>
            <TeamCard
                  name="Jack"
                  image={jack}
                  role="front end dev"
                  description="CS @ Cornell"
            >
            </TeamCard>
        </div>
      </section>
      
    </>
  )
}

export default page