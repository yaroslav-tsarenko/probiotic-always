import {FC, FunctionComponent} from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./GetInTouch.module.css";

const GetInTouch: FC = () => {
  return (
    <section className={styles.getInTouch}>
      <div className={styles.getInTouchContent}>
        <h1 className={styles.getInTouch1}>
          Get in Touch with Us for Any Inquiries
        </h1>
        <div className={styles.nameForm}>
          <div className={styles.nameField}>
            <div className={styles.nameLabel}>
              <div className={styles.nameLabel1}>
                <TextField
                  className={styles.nameLabelChild}
                  placeholder="Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "66px",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": { color: "#4b4b4b" },
                  }}
                />
                <TextField
                  className={styles.nameLabelItem}
                  placeholder="Email"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "66px",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": { color: "#4b4b4b" },
                  }}
                />
              </div>
              <TextField
                className={styles.nameLabelInner}
                placeholder="Phone"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#000" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    borderRadius: "8px",
                  },
                  "& .MuiInputBase-input": { color: "#4b4b4b" },
                  width: "495px",
                }}
              />
              <TextField
                className={styles.frameTextfield}
                placeholder="Website"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#000" },
                  "& .MuiInputBase-root": {
                    height: "66px",
                    borderRadius: "8px",
                  },
                  "& .MuiInputBase-input": { color: "#4b4b4b" },
                  width: "495px",
                }}
              />
            </div>
            <textarea
              className={styles.nameFieldChild}
              placeholder="Message"
              rows={13}
              cols={52}
            />
          </div>
          <div className={styles.haveQuestionsWeContainer}>
            <p
              className={styles.haveQuestionsWe}
            >{`Have questions? We have answers. Reach out to our team for any general inquiries or information regarding our `}</p>
            <p className={styles.productsAndServices}>products and services.</p>
          </div>
          <Button
            className={styles.button}
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "16",
              background: "#6e9e24",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#6e9e24" },
              height: 56,
            }}
          >
            SEND MESSAGE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
