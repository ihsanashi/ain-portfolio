import { CMSLink } from '@/components/Link';
import { Gallery } from '@/payload-types';
import { Media } from '@/components/Media';
import RichText from '@/components/RichText';

export const Canvas: React.FC<Gallery> = (props) => {
  const { content } = props;
  const item = content[0];

  return (
    <section className="relative">
      <Media
        className="h-[800px] w-dvw"
        imgClassName="h-full w-full"
        resource={item?.media}
      />

      {(item?.richText || item?.link) && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          {item.richText && (
            <RichText
              className="mb-4"
              data={item.richText}
              enableGutter={false}
            />
          )}
          {item.link?.label && <CMSLink {...item.link} />}
        </div>
      )}
    </section>
  );
};
