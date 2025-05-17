import { Gallery } from '@/payload-types';
import { CMSLink } from '@/components/Link';
import { Media } from '@/components/Media';
import RichText from '@/components/RichText';

export const TwoColumns: React.FC<Gallery> = (props) => {
  const { content, mediaPlacement } = props;
  const item = content[0];

  return (
    <section className="grid grid-cols-1 place-items-center gap-5 px-5 md:grid-cols-2 md:px-10 lg:px-20">
      {/* media */}
      <div
        className={`${mediaPlacement === 'left' ? 'order-first' : 'order-last'}`}
      >
        <Media
          imgClassName="object-cover h-[320px] md:h-[380px] lg:h-[460px]"
          htmlElement="article"
          resource={item?.media}
        />
      </div>
      {/* text content */}
      <div className="flex flex-col gap-y-5">
        {item?.richText && <RichText data={item.richText} />}
        {item?.link && (
          <div className="container mx-auto">
            <CMSLink {...item.link} />
          </div>
        )}
      </div>
    </section>
  );
};
