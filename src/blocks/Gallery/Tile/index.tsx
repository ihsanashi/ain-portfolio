import { Gallery } from '@/payload-types';
import { Media } from '@/components/Media';

export const Tile: React.FC<Gallery> = (props) => {
  const { content } = props;
  console.log('props: ', props); // TODO: Delete later

  return (
    <section className={`grid grid-cols-${content.length} relative gap-4 px-5`}>
      {/* // TODO handle other viewports  */}
      {content.map((item, index) => (
        <div className="relative max-h-[300px] max-w-[300px]" key={index}>
          <a href="#" target="_blank">
            {/* // TODO fix href */}
            {/* // TODO handle video assets? */}
            <Media
              className="h-full w-full object-cover brightness-90 hover:brightness-100"
              htmlElement="article"
              resource={item.media}
            />
          </a>
          {item.link?.label && (
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white">
              {item.link.label}
            </h3>
          )}
        </div>
      ))}
    </section>
  );
};
