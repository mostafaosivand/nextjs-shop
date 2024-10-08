import { useSessionStorage } from 'react-use';
import Link from '@components/ui/link';
import HighlightedBar from '@components/common/highlighted-bar';
import Header from '@components/layout/header/header-five';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';
import { useTranslation } from 'next-i18next';

const Layout: React.FC = ({ children }) => {
  const { t } = useTranslation('common');
  const [highlightedBar, setHighlightedBar] = useSessionStorage(
    'borobazar-highlightedBar',
    'false'
  );

  return (
    <div className="flex flex-col min-h-screen">
      {highlightedBar !== 'true' && (
        <HighlightedBar
          onClose={() => setHighlightedBar('true')}
          variant="highlightedTwo"
          className="text-[#460135]"
        >
          <div className="text-sm font-medium py-0.5 pe-6">
            <span>
              {t(
                'جشنواره فروش ویژه محصولات و تجهیزات آزامایشگاهی'
              )}
              <Link
                href="#"
                className="inline-flex text-xs uppercase font-bold ps-1.5 items-center relative transition-all top-[1px] hover:opacity-80"
              >
                <span className="border-b border-[#460135] inline-block pb-0.5">
                  جشنواره
                </span>
                <IoChevronForwardCircleOutline className="text-2xl ms-1 relative -top-0.5" />
              </Link>
            </span>
          </div>
        </HighlightedBar>
      )}
      {/* End of highlighted bar  */}

      <Header />
      <main
        className="relative flex-grow"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Layout;
