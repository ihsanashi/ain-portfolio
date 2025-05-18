import { CMSLink } from '@/components/Link';
import { Gallery } from '@/payload-types';
import { Media } from '@/components/Media';
import RichText from '@/components/RichText';

export const Postcard: React.FC<Gallery> = (props) => {
  const { content } = props;
  const main = content[0];
  const secondary = content[1];

  return (
    <section className="grid grid-cols-1 grid-rows-1 gap-5 px-5 pt-10 lg:grid-cols-12 lg:grid-rows-3 lg:px-0">
      <Media
        className="col-start-1 lg:col-start-2 lg:col-end-10 lg:row-start-1 lg:row-end-3"
        imgClassName="object-contain"
        resource={main?.media}
      />

      <Media
        className="z-10 hidden lg:col-start-8 lg:col-end-12 lg:row-start-2 lg:row-end-3 lg:block"
        imgClassName="object-contain border-4 border-white"
        resource={secondary?.media}
      />

      {(main?.richText || main?.link) && (
        <div className="lg:col-start-2 lg:col-end-8 lg:row-start-3 lg:row-end-4">
          {main.richText && (
            <RichText
              className="pb-4"
              data={main.richText}
              enableGutter={false}
            />
          )}
          {main.link && <CMSLink {...main.link} />}
        </div>
      )}
    </section>
  );
};
