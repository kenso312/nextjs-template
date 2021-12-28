interface Props {
  text: string;
}

function ComponentTemplate(props: Props): JSX.Element {
  /* Define state / hook */
  const { text } = props;

  /* Custom Data Object for render or other usages */

  /* render control function / logic */

  /* Data Change Listeners - useEffect/useMemo/useCallback */

  /* Render */
  return <h1 className="text-5xl">{text}</h1>;
}

export default ComponentTemplate;
