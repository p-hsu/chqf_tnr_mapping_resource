export default function About() {
  return (
    <div className="box-border mx-auto my-auto p-5 max-w-4xl max-h-screen relative text-base leading-snug flex flex-grow">
      <div className=" p-5 m-auto border-2 border-gray-700 border-opacity-50 rounded-md text-gray-100 bg-gradient-to-b from-gray-700 via-gray-500 to-gray-700 shadow-lg">
      <p>
        This application serves as an internal tool for
        <a target="_blank" href="https://stlspayneuter.org/" className="border-b-2 border-pink-400 border-opacity-25 text-pink-400 font-medium"> Carol House Quick Fix </a>
        (CHQF) Pet Clinic in Saint Louis, MO. As CHQF continues to their mission to decrease pet and animal over-population
        in the city, the "Trap-Neuter-Release" (TNR) Program has proved to be highly effective in controlling feral
        cat numbers. Community collaboration is and has always been a pivitol part of this organization- our partnerships
        with other TNR colony feeders, trappers, transporters and local animal welfare organizations contribute to our mission
        on a daily basis.
      </p>
      <br></br>
      <p>
        Although simple, this tool is a visual representation that allows ease of access to the bigger picture. At
        a glance, the user will be able to see the pins of all colonies, any associated personnel, and any resources
        provided by CHQF.
      </p>
      <br></br>
      <p> This map can also be cross-referenced with outreach data and help with making important
        connections within the network of our pet-owning, animal caring community. Just as well, this makes for a
        great presentation to potential donors or other interested parties.</p>
      </div>
    </div>
  )
}