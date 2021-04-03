export const SplitButtonCase = ({setState, Properties, ReturnTimeLog, state}) => {
  setState({
    type: Properties.timeLogs.isEnable,
    payload: [
      ...state.timeLogs.logs,
      ReturnTimeLog(state.displayTime, "Split"),
    ],
  });
  setState({
    type: Properties.splitedTime,
    payload: ReturnTimeLog(state.displayTime).time,
  });
  setState({
    type: Properties.buttons.split.id,
    payload: {
      ...state.buttons.second,
      disable: true,
    },
  });
  setState({
    type: Properties.buttons.reset.id,
    payload: {
      ...state.buttons.third,
      disable: false,
    },
  });
};
