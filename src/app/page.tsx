import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        iconType="bench"
        text="テキストが入る"
        // iconOnly
        loading
      />
      <textarea name="" id=""></textarea>
      <p className="selectable"></p>
    </div>
  );
}
