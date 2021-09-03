import DroneCard from '../components/DroneCard'

const DroneList = () => {
  return ( 
    <>
      <DroneCard 
        imagePrefix="equipment-dji-inspire-2"
        imageTitle="DJI Inspire 2 image"
        heading="DJI Inspire 2"
        body="Image quality, power and intelligence to meet the needs of professional filmmakers and enterprises around the globe."
        href="/"
      />
      <DroneCard 
        imagePrefix="equipment-zenmuse-x7"
        imageTitle="Zenmuse X7 image"
        heading="Zenmuse X7"
        body="The Zenmuse X7 is a compact Super 35 camera with an integrated gimbal made for high-end filmmaking."
        href="/"
        fileExtension="png"
      />
      <DroneCard 
        imagePrefix="equipment-indemnis-nexus"
        imageTitle="Indemnis Nexus image"
        heading="Indemnis Nexus"
        body="The Nexus by Indemnis is the first UAV recovery system to be proven reliable in any failure situation."
        href="/"
        fileExtension="png"
      />
      <DroneCard 
        imagePrefix="equipment-outdoor-fpv"
        imageTitle="Outdoor FPV image"
        heading="Outdoor FPV"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis."
        href="/"
      />
      <DroneCard 
        imagePrefix="equipment-indoor-fpv"
        imageTitle="Indoor FPV image"
        heading="Indoor FPV"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis."
        href="/"
      />    
    </>
  );
}
 
export default DroneList;