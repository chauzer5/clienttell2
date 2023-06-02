import { useAppContext } from "@/app/context/app_state";
import { useCallContext } from "@/app/context/call_state";
import { Button } from "@mui/material";

export default function ExportModalButton(props){
    const styles = {
        button: {
            height: "60px",
            width: "130px",
            fontSize: "18px",
            backgroundColor: "#60AFFF",
        },
    };

    const { otherNotes, exportOptions } = props;
    const { notify } = useAppContext();
    const { prompts, callInfo } = useCallContext();

    const handleClick = () => {
        switch(exportOptions.mode){
            case "clipboard":
                handleCopy();
                break;
            case "csv":
                // TODO later
                break;
            default:
                // do nothing
        }
    };

    const handleCopy = () => {
        let outputString = "";
        if(exportOptions.includeCallInfo){
            outputString += `Call Info (${callInfo.date})\n`;
            outputString += (callInfo.companyName ? `Company Name: ${callInfo.companyName}\n` : "");
            outputString += (callInfo.contactName ? `Contact Name: ${callInfo.contactName}\n` : "");
            outputString += (callInfo.notes ? `Additional Notes:\n${callInfo.notes}\n` : "");
            outputString += "\n";
        }

        for(let i = 0; i < prompts.length; i++){
            outputString += prompts[i].prompt;
            outputString += ((exportOptions.includePaths && prompts[i].path !== "") ? ` (${prompts[i].path})\n` : "\n");
            outputString += prompts[i].note;
            outputString += (i === prompts.length ? "" : "\n");
        }

        if(props.otherNotes){
            outputString += "\nOther notes:\n"
            outputString += `${otherNotes}`;
        }

        navigator.clipboard.writeText(outputString);
        notify("Copied to clipboard", "info");
    };

    return (
        <Button onClick={handleClick} variant="contained" sx={styles.button}>Export</Button>
    );
}