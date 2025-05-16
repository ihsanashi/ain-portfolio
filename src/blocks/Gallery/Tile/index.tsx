import { Gallery } from '@/payload-types';
import { Media } from '@/components/Media';
import { getGridConfig, gridMapperClasses } from './helper';

export const Tile: React.FC<Gallery> = (props) => {
  const { content } = props;

  const gridConfig = getGridConfig(content.length);
  const gridClasses = gridMapperClasses[gridConfig];

  return (
    <section className={`relative grid gap-4 px-5 ${gridClasses}`}>
      {content.map((item, index) => (
        <div className="relative mx-auto" key={index}>
          <a href="#" target="_blank">
            {/* // TODO fix href */}
            {/* // TODO handle video assets? */}
            <Media
              className="brightness-90 hover:brightness-100"
              imgClassName="object-cover h-48 w-96"
              videoClassName="object-cover h-48 w-96"
              htmlElement="article"
              resource={item.media}
            />
          </a>
          {item.link?.label && (
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
              {/* // TODO: text contrast with bright/dark images */}
              {item.link.label}
            </h3>
          )}
        </div>
      ))}
    </section>
  );
};
