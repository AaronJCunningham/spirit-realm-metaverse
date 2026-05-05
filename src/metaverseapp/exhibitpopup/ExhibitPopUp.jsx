import { useSetExhibit } from "../store/MetaStore";
import { Landscape } from "./Landscape";
import { Portrait } from "./Portrait";

export const ExhibitPopUp = () => {
  const [exhibit, setExhibit] = useSetExhibit((state) => [
    state.exhibit,
    state.setExhibit,
  ]);

  return exhibit.bool ? (
    exhibit.portrait ? (
      <Portrait exhibit={exhibit} handleClose={() => setExhibit(false)} />
    ) : (
      <Landscape exhibit={exhibit} handleClose={() => setExhibit(false)} />
    )
  ) : null;
};
