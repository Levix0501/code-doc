import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface CardItemType {
  title: string;
  desc: string;
  icon: string;
  href: string;
}

export interface NavCardsProps {
  list: CardItemType[];
}

const NavCards = ({ list }: NavCardsProps) => {
  return (
    <div className="mt-6 grid grid-cols-[repeat(3,1fr)] gap-2">
      {list.map(({ title, desc, icon, href }) => (
        <a key={title} href={href} target="_blank">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <img src={icon} alt={`${title}'s icon`} className="w-6 h-6" />
                <div className="text-lg">{title}</div>
              </CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default NavCards;
