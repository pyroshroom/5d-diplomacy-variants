import themeColours from '../../utils/colours';

enum Nation {
  Austria = 'Austria',
  France = 'France',
}

export const getNationColour = (nation?: Nation, isEmphasised: boolean = true) => {
  if (!nation) return isEmphasised ? themeColours.unclaimedEmphasised : themeColours.unclaimedStandard;
  return {
    [Nation.Austria]: isEmphasised ? themeColours.austriaEmphasised : themeColours.austriaStandard,
    [Nation.France]: isEmphasised ? themeColours.franceEmphasised : themeColours.franceStandard
  }[nation];
};

export default Nation;
