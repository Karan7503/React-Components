import SnackbarExample from "./components/SnackbarExample";
import CardExample from "./components/CardExample";
import DialogExample from "./components/DialogExample";
import FormExample from "./components/FormExample";
import GridExample from "./components/GridExample";
import SelectExample from "./components/SelectExample";
import DataGridExample from "./components/DataGridExample";

function Example() {
  return (
    <div className="flex flex-col items-center py-10 gap-20 overflow-hidden">

      <FormExample/>
      
      <CardExample/>

      <GridExample/>

      <SelectExample/>

      <DialogExample/>

      <SnackbarExample />
     
      <DataGridExample/>
      
    </div>
  )
}

export default Example