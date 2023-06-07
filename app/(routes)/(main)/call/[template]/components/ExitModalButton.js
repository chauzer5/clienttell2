import utils from "@/app/utils";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ExitModalButton(){
    const styles = {
        button: {
            height: "60px",
            width: "130px",
            fontSize: "18px",
            backgroundColor: "#FF7474",
            "&:hover": {
                backgroundColor: utils.colorModify("#FF7474", -40),
            }
        }
    };

    const router = useRouter();

    const handleClick = () => {
        router.push("/call");
    };

    return (
        <Button onClick={handleClick} variant="contained" sx={styles.button}>New Call</Button>
    );
}