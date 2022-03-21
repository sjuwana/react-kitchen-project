import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedRoomNum={"1"} />
      <Bedroom bedRoomNum={"2"} />
      <Bedroom bedRoomNum={"3"} />
      <Bath size={"Full"} />
      <Bath size={"Half"} />
    </div>
  );
}

export default FloorPlan;
