export default function About() {
  return (
    <div className="box-border w-screen p-3 relative text-sm leading-normal flex flex-col flex-grow">
      {/* <h1 className="text-lg my-2 text-center">About</h1> */}
      <div className=" p-2 m-auto border-2 border-gray-700 border-opacity-50 rounded-md">
      <p>
        This application serves as an internal tool for
        <a target="_blank" href="https://stlspayneuter.org/" className="border-b-2 border-pink-400 border-opacity-25 text-pink-500 font-medium"> Carol House Quick Fix </a>
        (CHQF) Pet Clinic in Saint Louis, MO. As CHQF continues to their mission to decrease pet/animal population
        in the city, the "Trap-Neuter-Release" Program has proved to be highly effective in controlling the feral
        cat numbers. Working with the community is and has always been pivitol - be it feeders, transporters, or
        other animal welfare organizations - the collaboration between all participants serves consistent progress
        on a daily basis.
      </p>
      <br></br>
      <p>
        Although simple, this tool is a visual representation that allows ease of access to the bigger picture. At
        a glance, the user will be able to see the pins of all colonies, any associated personnel, and any resources
        provided by CHQF. This visual can be cross-referenced with our outreach clients and help make important
        connections within the network of our pet-owning, animal caring community. Just as well, this makes for a
        great presentation to potential donors or other interested parties.
      </p>
      </div>
    </div>
  )
}