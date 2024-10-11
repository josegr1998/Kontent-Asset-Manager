import { ASSETS_PER_PAGE } from "@/app/components/Assets/Assets.consts";
import { fetchAllAssets } from "@/app/network/utils/fetchAllAssets";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;

    const assets = await fetchAllAssets();

    const paginationAssets = assets.slice((page - 1) * 10, page * 10);

    const numberOfAssets = assets.length;

    return new Response(
      JSON.stringify({
        data: paginationAssets,
        hasNextPage: ASSETS_PER_PAGE * page <= numberOfAssets,
        hasPrevPage: page - 1 > 0,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
