import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";

export default function Home() {
  return (
    <div>
      <Button
        variant="secondary"
        size="sm"
        iconType="bench"
        text="テキストが入る"
      // iconOnly
      // loading
      />
      <Button
        variant="primary"
        size="sm"
        iconType="none"
        text="テキストが入る"
      // iconOnly
      // loading
      />
      <Button
        variant="ghost"
        size="sm"
        iconType="bench"
        text=""
        iconOnly
      // loading
      />
      <Button
        variant="danger"
        size="sm"
        iconType="none"
        text="×"
      // iconOnly
      // loading
      />
    </div>
  );
}
