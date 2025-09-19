import { useRouter } from "next/navigation";
import Image from "next/image";

export default async function SideTab(props) {
  const router = useRouter();
  return (
    <div className="flex" onClick={() => router.push(`${props.path}`)}>
      {props.prefix}
      {props.name}
    </div>
  );
}
