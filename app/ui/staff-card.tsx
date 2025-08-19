import Cover from "@/app/ui/cover";

import type { AnimeQuery } from "@/app/gql/sdk";

type Staff = NonNullable<
  NonNullable<NonNullable<AnimeQuery["Media"]>["staff"]>["edges"]
>[number];

type Props = {
  staff?: Staff;
};

const StaffCard = ({ staff }: Props) => {
  if (!staff) {
    return;
  }

  const staffName =
    staff?.node?.name?.last && staff.node?.name.first
      ? `${staff.node.name.last} ${staff.node.name.first}`
      : staff.node?.name?.first
        ? staff.node.name.first
        : staff.node?.name?.last
          ? staff.node.name.last
          : undefined;

  return (
    <article
      aria-labelledby={staffName + "-card-title"}
      className="bg-foreground-sp flex justify-between overflow-hidden rounded-[3px]"
    >
      <div className="flex">
        <Cover
          size="xs"
          src={staff?.node?.image?.large}
          alt={staffName && staffName + "'s cover"}
        />

        <div className="flex flex-col justify-between p-2.5">
          <h3
            id={staffName + "-card-title"}
            className="text-text text-xs leading-[0.975rem]"
          >
            {staffName}
          </h3>

          <span
            aria-label="Role"
            className="text-text-lighter text-[0.6875rem] leading-[0.790625rem] capitalize"
          >
            {staff.role}
          </span>
        </div>
      </div>
    </article>
  );
};

export default StaffCard;
