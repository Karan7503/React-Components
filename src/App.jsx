import AccordionExample from "./components/navigation/AccordianExample";
import TabsExample from "./components/navigation/TabsExample";
import DataTable from "./components/table/DataTable";
import StudentTable from "./components/table/StudentTable";
import DropdownButton from "./components/ui/DropdownButton";
import ListView from "./components/ui/ListView";
import Example from "./Example";




function App(){

  return(

    <div className=" flex flex-col items-center py-10 gap-20 overflow-hidden">

     <Example/>
     <DataTable/>

     <StudentTable/>

     <TabsExample/>

     <AccordionExample/>
     <ListView/>
     <DropdownButton/>
    </div>

  );

}

export default App;