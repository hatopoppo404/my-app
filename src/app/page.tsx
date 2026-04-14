import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div>
      <Button
        variant="ghost"
        size="lg"
        iconType="bench"
        text="テキストが入る"
        iconOnly
      />
      <textarea name="" id=""></textarea>
      <p className="selectable">せんたくできるよ</p>
    </div>
  );
}
