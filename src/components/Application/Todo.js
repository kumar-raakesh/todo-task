import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "@fontsource/roboto";
import Checkbox from "@material-ui/core/Checkbox";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import CloseIcon from "@material-ui/icons/Close";

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    checked: false,
    textValue: "",
  };

  componentDidMount = () => {
    this.props.actions.addItem(false);
  };

  addItem = () => {
    this.props.actions.addItem(this.state.textValue);
    this.setState({
      textValue: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <Grid container justify="center" alignItems="center">
              <Typography
                variant="h4"
                spacing={2}
                style={{ height: 60, marginTop: 16, marginBottom: 16 }}
              >
                Todo App
              </Typography>

              <Grid
                container
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6} style={{ marginBottom: 16 }}>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      onChange={(e) =>
                        this.setState({
                          textValue: e.target.value,
                        })
                      }
                      value={this.state.textValue}
                      labelWidth={0}
                      onKeyPress={(event) => {
                        if (
                          event.key === "Enter" &&
                          this.state.textValue.length
                        ) {
                          this.addItem();
                        }
                      }}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={2}>
                  <Button
                    disabled={this.state.textValue.length ? false : true}
                    variant="contained"
                    color="primary"
                    onClick={() => this.addItem()}
                  >
                    Add Item
                  </Button>
                </Grid>
              </Grid>

              <Grid container>
                {this.props.apps.list.map((item, key) => (
                  <Grid
                    key={key}
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{
                      padding: 8,
                      marginBottom: 12,
                    }}
                  >
                    <Grid
                      container
                      item
                      xs={8}
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{
                        border: "1px solid #808080",
                        borderRadius: 6,
                      }}
                    >
                      <Grid item xs={1}>
                        <Checkbox
                          checked={item.checked}
                          onChange={() => {
                            this.props.actions.markItem(key, !item.checked);
                          }}
                          color="default"
                          inputProps={{
                            "aria-label": "checkbox with default color",
                          }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        {item.item || ""}
                      </Grid>
                      <Grid item xs={1}>
                        <CloseIcon
                          onClick={() => {
                            this.props.actions.delItem(key);
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

Todo.propTypes = {
  actions: PropTypes.object,
  apps: PropTypes.object,
};
